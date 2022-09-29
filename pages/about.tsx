import type { NextPage } from "next";
import Head from "next/head";
import BottomBlocks from "../components/about/BottomBlocks";
import AboutPeople from "../components/about/AboutPeople";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTop from "../components/PageTop";
import BottomText from "../components/BottomText";
import { getPageBySlug, getSectionBySlug } from "../lib/api";
import { IColorBlock, IFooter, IHeader, IPerson } from "../types";
import markdownToHtml from "../lib/markdownToHtml";
import Width from "../components/Width";

interface IPeopleCategory {
  heading: string;
  subheading: string;
  people: IPerson[];
}

interface IProps {
  footer: IFooter;
  header: IHeader;
  page: {
    people_category: IPeopleCategory[];
    heading: string;
    top_text: string;
    people_heading: string;
    people_text: string;
    people: IPerson[];
    bottom_heading: string;
    bottom_text: string;
    bottom_blocks: IColorBlock[];
  };
}

const About: NextPage<IProps> = ({ footer, page, header }: IProps) => {
  return (
    <div>
      <Head>
        <title>ICON - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
      <PageTop>
        <h1>{page.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.top_text }} />
      </PageTop>
      <div className="about-padding">
        <Width>
          <div className="about-peoples">
            {page.people_category.map((category, i) => {
              return (
                <div key={i} className="about-people-wrap">
                  <AboutPeople
                    people={category.people}
                    text={category.subheading}
                    heading={category.heading}
                  />
                </div>
              );
            })}
          </div>
        </Width>
        <BottomText heading={page.bottom_heading} text={page.bottom_text} />
      </div>
      <BottomBlocks blocks={page.bottom_blocks} />

      <Footer footer={footer} />
    </div>
  );
};

export async function getStaticProps() {
  const footer = getSectionBySlug("footer", [
    "copyright_text",
    "navigations",
    "social",
  ]);
  const header = getSectionBySlug("header", ["nav", "inner_navs", "social"]);

  const page = getPageBySlug("about", [
    "heading",
    "top_text",
    "people_heading",
    "people_text",
    "people",
    "bottom_heading",
    "bottom_text",
    "bottom_blocks",
    "people_category",
  ]);

  const top_text = await markdownToHtml(page.top_text);

  return {
    props: {
      page: {
        ...page,
        top_text,
      },
      header,
      footer,
    },
  };
}

export default About;
