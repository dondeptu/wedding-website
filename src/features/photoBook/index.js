import { Header } from "../../common/Header";
import banner from "./banner.jpg";
import { Section } from "./Section";

export const PhotoBook = () => (
    <>
        <Header
            banner={banner}
            title={"Galeria zdjęć"}
            subTitle={"przesyłaj & oglądaj"}
        />
        <Section />
    </>
);