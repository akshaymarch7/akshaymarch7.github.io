import React from 'react';

const videos = [
    { title: "Closures in JS", views: "1.2M views", duration: "18:20", thumb: "https://picsum.photos/300/170?random=1" },
    { title: "Event Loop", views: "900K views", duration: "22:15", thumb: "https://picsum.photos/300/170?random=2" },
    { title: "Promises Explained", views: "850K views", duration: "25:00", thumb: "https://picsum.photos/300/170?random=3" },
    { title: "Async Await", views: "700K views", duration: "15:45", thumb: "https://picsum.photos/300/170?random=4" },
    { title: "Hoisting", views: "600K views", duration: "12:10", thumb: "https://picsum.photos/300/170?random=5" },
    { title: "Map Filter Reduce", views: "1.5M views", duration: "30:00", thumb: "https://picsum.photos/300/170?random=6" },
];

export const VideosTab: React.FC = () => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-vscode-bg font-sans">
       <div className="flex items-center justify-between mb-6">
           <h2 className="text-xl font-bold text-white">Popular Videos</h2>
           <span className="text-xs bg-[#333] px-2 py-1 rounded text-gray-400">Component: VideoGrid.tsx</span>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {videos.map((vid, idx) => (
               <div key={idx} className="bg-[#252526] hover:bg-[#2d2d2d] transition-colors rounded-lg overflow-hidden border border-[#333] group cursor-pointer">
                   <div className="relative">
                        <img src={vid.thumb} alt={vid.title} className="w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 text-xs rounded text-white">{vid.duration}</div>
                   </div>
                   <div className="p-3">
                       <h3 className="font-medium text-gray-200 group-hover:text-vscode-accent transition-colors truncate">{vid.title}</h3>
                       <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                           <span>Namaste JavaScript</span>
                           <span>{vid.views}</span>
                       </div>
                   </div>
               </div>
           ))}
       </div>
    </div>
  );
};
