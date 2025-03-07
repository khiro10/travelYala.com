// import React, { useEffect, useState } from "react";
// import ImageTracer from "imagetracerjs";

// const ImageToSVG = () => {
//   const [svg, setSvg] = useState<string | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (e.target?.result) {
//           const img = new Image();
//           img.src = e.target.result as string;
//           img.onload = () => {
//             ImageTracer.imageToSVG(img.src, (svgString: string) => {
//               setSvg(svgString);
//             });
//           };
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   useEffect(() => {
//     svg ? console.log(svg) : console.log("waiting for SVG");
    
    
//   }, [svg]);
  
//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       {svg && (
//         <div>
//           <h3>Converted SVG:</h3>
//           <div dangerouslySetInnerHTML={{ __html: svg }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageToSVG;
