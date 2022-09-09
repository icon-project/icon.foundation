import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import HomeBlocks from "../components/home/HomeBlocks";
import HomeTop from "../components/home/HomeTop";
import { getPageBySlug, getSectionBySlug } from "../lib/api";
import { IColorBlock, IHeader } from "../types";

interface IProps {
  header: IHeader;
  page: {
    heading: string;
    colorful_blocks: IColorBlock[];
  };
}

const Home: NextPage<IProps> = ({ page, header }: IProps) => {
  return (
    <div className="home-wrap">
      <Head>
        <title>
          Icon - We support open development for decentralized technologies
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
      <HomeTop heading={page.heading} />
      {page.colorful_blocks && <HomeBlocks blocks={page.colorful_blocks} />}
    </div>
  );
};

export async function getStaticProps() {
  const page = getPageBySlug("home", ["heading", "colorful_blocks"]);
  const header = getSectionBySlug("header", ["nav", "inner_navs", "social"]);

  return {
    props: {
      page,
      header,
    },
  };
}

export default Home;
