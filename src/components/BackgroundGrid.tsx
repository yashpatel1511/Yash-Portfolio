import { memo } from "react";

const BackgroundGrid = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-luxury-black">
      <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(239,68,68,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="absolute -left-32 top-24 h-[440px] w-[440px] rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute right-[-120px] top-[36%] h-[520px] w-[520px] rounded-full bg-red-700/10 blur-[140px]" />
      <div className="absolute bottom-[-180px] left-[34%] h-[480px] w-[480px] rounded-full bg-red-500/[0.08] blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(9,9,9,0.12),#090909_92%)]" />
    </div>
  );
};

export default memo(BackgroundGrid);
