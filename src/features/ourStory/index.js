import { Header } from "../../common/Header";
import banner from "./banner.jpg";
import { Section } from "./Section";

export const OurStory = () => (
    <main>
        <Header
            banner={banner}
            title={"Nasza historia"}
            subTitle={"D + M"}
        />
        <Section />
    </main>
);