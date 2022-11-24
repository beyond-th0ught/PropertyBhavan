// import { Carousel } from "rsuite";
import Image from "next/image";
import garia from '../../public/Garia-transformed.png'
import dum from '../../public/dum-dum-transformed.png'
import tolly from '../../public/tollygunge-transformed.png'
import newton from '../../public/Newtown-puMYYbOvf-transformed.png'
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Image.module.css'

export default function PropertyCard() {
  const navigate = useRouter();
  const handleImageClick = (loc) => {
    navigate.push(`/ListView/sale/${loc}`);
  };

  return (
    <>
      <div className={`${styles.imageCard_container} grid grid-flow-row px-12 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4`}>
        <div className="flex justify-center items-center">
          <div onClick={()=>{handleImageClick('garia')}} className=" p-4">
            <span className="card flex flex-col justify-center rounded-lg shadow-sm">
              <span className="prod-Image">
                <Image
                  src={garia}
                  className="w-full object-cover object-center"
                  alt="property"
                />
                <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                  Garia
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div onClick={()=>{handleImageClick('dumdum')}} className=" p-4">
            <span className="card flex flex-col justify-center rounded-lg shadow-sm">
              <span className="prod-Image">
                <Image
                  src={dum}
                  className="w-full object-cover object-center"
                  alt="property"
                />
                <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                  Dum Dum
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div onClick={()=>{handleImageClick('tollygunge')}} className=" p-4">
            <span className="card flex flex-col justify-center rounded-lg shadow-sm">
              <span className="prod-Image">
                <Image
                  src={tolly}
                  className="w-full object-cover object-center"
                  alt="property"
                />
                <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                  Tollygunge
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div onClick={()=>{handleImageClick('newtown')}} className=" p-4">
            <span className="card flex flex-col justify-center rounded-lg shadow-sm">
              <span className="prod-Image">
                <Image
                  src={newton}
                  className="w-full object-cover object-center"
                  alt="property"
                />
                <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                  Newtown
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imageCard_container_phone}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          useKeyboardArrows={true}
          showThumbs={true}
          className={styles.custom_slider}
        >
          <div className=" flex justify-center items-center ">
            <div onClick={()=>{handleImageClick('garia')}} className={`${styles.imagecard_phone} p-4`}>
              <span className="card flex flex-col justify-center rounded-lg shadow-sm">
                <span className="prod-Image">
                  <Image
                    src={garia}
                    className="w-full object-cover object-center"
                    alt="property"
                  />
                  <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                    Garia
                  </p>
                </span>
              </span>
            </div>
          </div>
          <div className="  flex justify-center items-center ">
            <div onClick={()=>{handleImageClick('dumdum')}} className={`${styles.imagecard_phone} p-4`}>
              <span className="card flex flex-col justify-center rounded-lg shadow-sm">
                <span className="prod-Image">
                  <Image
                    src={dum}
                    className="w-full object-cover object-center"
                    alt="property"
                  />
                  <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                    Dum Dum
                  </p>
                </span>
              </span>
            </div>
          </div>
          <div className="  flex justify-center items-center ">
            <div onClick={()=>{handleImageClick('tollygunge')}} className={`${styles.imagecard_phone} p-4`}>
              <span className="card flex flex-col justify-center rounded-lg shadow-sm">
                <span className="prod-Image">
                  <Image
                    src={tolly}
                    className="w-full object-cover object-center"
                    alt="property"
                  />
                  <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                    Tollygunge
                  </p>
                </span>
              </span>
            </div>
          </div>
          <div className="  flex justify-center items-center ">
            <div onClick={()=>{handleImageClick('newtown')}} className={`${styles.imagecard_phone} p-4`}>
              <span className="card flex flex-col justify-center rounded-lg shadow-sm">
                <span className="prod-Image">
                  <Image
                    src={newton}
                    className="w-full object-cover object-center"
                    alt="property"
                  />
                  <p className="font-semibold py-2 text-l text-center drop-shadow-md tracking-wide">
                    Newtown
                  </p>
                </span>
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
