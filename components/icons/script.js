const fs=require('fs');
const svg=fs.readFileSync('C:/Users/frano/Downloads/icons/gin.svg','utf8');
const pathMatch=svg.match(/<path[\s\S]*?d="([\s\S]*?)"[\s\S]*?>/i);
const d=pathMatch ? pathMatch[1] : '';
const out = `import React from 'react';

export const GinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" width="24" height="24" viewBox="0 0 226.87 318.98" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="${d.replace(/\\s+/g, ' ')}" />
  </svg>
);
`;
fs.writeFileSync('d:/dev/portfolio/components/icons/GinIcon.tsx', out);
