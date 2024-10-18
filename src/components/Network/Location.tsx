import { forwardRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { css } from "@styled-system/css";
import useKakaoMapLoader from "@/hooks/useKakaoLoader";
import Signature1Pc from "@/assets/svgs/signature1-pc.svg?react";
import Signature1Mobile from "@/assets/svgs/signature1-mobile.svg?react";

const NETWORK_LOCATION = {
  lat: 37.50603,
  lng: 127.02534,
};

const Location = forwardRef<HTMLDivElement>((_props, ref) => {
  useKakaoMapLoader();

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.signaturePc}>
        <Signature1Pc />
      </div>
      <div className={styles.signatureMobile}>
        <Signature1Mobile />
      </div>
      <div className={styles.title}>Location</div>
      <div>강남 모드라운지에서 11월 29일에 만나요!</div>
      <div className={styles.mapContainer}>
        <Map
          id="map"
          center={NETWORK_LOCATION}
          level={4}
          style={{
            width: "100%",
            maxWidth: "121.4rem",
            paddingBottom: "54.36%",
            borderRadius: "2.4rem",
            height: "auto",
            maxHeight: "66rem",
          }}
        >
          <MapMarker position={NETWORK_LOCATION} />
        </Map>
      </div>
    </div>
  );
});

export default Location;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    marginBottom: "28rem",
    fontSize: "3.6rem",
    fontWeight: 600,
    width: "calc(100vw - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
      fontSize: "1.6rem",
    },
  }),
  signaturePc: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  signatureMobile: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "winter",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  mapContainer: css({
    maxWidth: "121.4rem",
    width: "calc(100vw - 6.4rem)",
    height: "auto",
    maxHeight: "66rem",
    marginTop: "8.4rem",
    borderRadius: "2.4rem",

    "@media (max-width: 768px)": {
      marginTop: "3.2rem",
    },
  }),
};
