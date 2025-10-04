import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <Image
        src="https://www.freepik.com/free-photo/beautiful-view-sunset-sea_3624503.htm#from_element=photos_discover&from_view=subhome"
        alt="next image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
