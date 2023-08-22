import React from "react";
import { fetchThumbnail, fetchCarDetail } from "@/app/utils/fetch";
import Banner from "@/app/components/Banner";
import Slider from "@/app/components/Slider";
import Information from "@/app/components/Information";
import Highlight from "@/app/components/Highlight";
import Form from "@/app/components/Form";
import carDetail from "@/app/style/carDetail.module.css";

const idPage = async ({ params }) => {
  const carData = await fetchCarDetail(params.id);
  const slides = await fetchThumbnail(params.id);
  const {
    id,
    year,
    manufacturer,
    model,
    origin,
    price,
    transmission,
    km,
    horsepower,
    bodyStyle,
    detail,
  } = carData;
  return (
    <div className={carDetail.container}>
      <div className={carDetail.band}></div>
      <Banner header={`${year} | ${manufacturer} ${model}`} />
      <div className={carDetail.content}>
        <Slider slides={slides} />
        <div className={carDetail.detail}>
          <Information name={` ${manufacturer} ${model}`} detail={detail} />
          <div className={carDetail.highlight}>
            <Highlight
              year={year}
              manufacturer={manufacturer}
              model={model}
              body_style={bodyStyle}
              km={km}
              transmission={transmission}
              origin={origin}
              horsepower={horsepower}
              price={price}
            />
          </div>
        </div>
      </div>
      <div className={carDetail.box}>
        <div className={carDetail.box_content}>
          <h2>ENQUIRY FORM</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default idPage;
