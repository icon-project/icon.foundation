import type { NextPage } from "next";
import Head from "next/head";
import BottomBlocks from "../components/about/BottomBlocks";
import BottomText from "../components/BottomText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTop from "../components/PageTop";
import ProjectsProjects from "../components/projects/ProjectsProjects";
import { getPageBySlug, getSectionBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { IColorBlock, IFooter, IHeader, IProject } from "../types";

interface IProps {
  footer: IFooter;
  header: IHeader;
  page: {
    heading: string;
    top_text: string;
    projects: IProject[];
    bottom_heading: string;
    bottom_text: string;
    bottom_blocks: IColorBlock[];
  };
}

const Projects: NextPage<IProps> = ({ page, footer, header }: IProps) => {
  return (
    <div>
      <Head>
        <title>Icon - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
      <PageTop>
        <h1>{page.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.top_text }} />
      </PageTop>
      <ProjectsProjects projects={page.projects} />
      <BottomText heading={page.bottom_heading} text={page.bottom_text} />

      <BottomBlocks blocks={page.bottom_blocks} />
      <Footer footer={footer} />
    </div>
  );
};

export async function getStaticProps() {
  const page = getPageBySlug("projects", [
    "heading",
    "top_text",
    "projects",
    "image",
    "bottom_heading",
    "bottom_text",
    "bottom_blocks",
  ]);
  const top_text = await markdownToHtml(page.top_text || "");
  const footer = getSectionBySlug("footer", [
    "copyright_text",
    "navigations",
    "social",
  ]);
  const header = getSectionBySlug("header", ["nav", "inner_navs", "social"]);

  return {
    props: {
      footer,
      header,
      page: {
        ...page,
        top_text,
      },
    },
  };
}

export default Projects;
