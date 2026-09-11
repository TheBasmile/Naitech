import { TruckIcon } from './Icons';

export default function AnnouncementBar() {
  return (
    <div className="bg-ink py-2 text-center text-xs font-medium text-white">
      <div className="container-page flex items-center justify-center gap-2">
        <TruckIcon className="h-3.5 w-3.5" />
        <span>توصيل لجميع مدن المغرب</span>
      </div>
    </div>
  );
}
