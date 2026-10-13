type SeoConfig = {
  title: string;
  description: string;
  image?: string;
};

const ensureMeta = (selector: string, attribute: "name" | "property", key: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  return tag;
};

export const applySEO = ({ title, description, image }: SeoConfig) => {
  document.title = title;

  ensureMeta('meta[name="description"]', "name", "description").content = description;
  ensureMeta('meta[property="og:title"]', "property", "og:title").content = title;
  ensureMeta('meta[property="og:description"]', "property", "og:description").content = description;
  ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").content = title;
  ensureMeta('meta[name="twitter:description"]', "name", "twitter:description").content = description;

  if (image) {
    ensureMeta('meta[property="og:image"]', "property", "og:image").content = image;
    ensureMeta('meta[name="twitter:image"]', "name", "twitter:image").content = image;
  }
};
