import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PageBody from "../components/PageBody";
import {
  getAllBasicPages,
  getBasicPageBySlug,
  getSectionBySlug,
} from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { IFooter, IHeader } from "../types";

interface IProps {
  header: IHeader;
  footer: IFooter;
  page: {
    page_title: string;
    slug: string;
    content: string;
  };
}

const BasicPage: NextPage<IProps> = ({ page, header, footer }: IProps) => {
  const title = `Icon - ${page.page_title}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
      <PageBody>
        <h1>{page.page_title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </PageBody>
      <Footer footer={footer} />
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const page = getBasicPageBySlug(params.slug, [
    "page_title",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(page.content || "");
  const footer = getSectionBySlug("footer", [
    "copyright_text",
    "navigations",
    "social",
  ]);
  const header = getSectionBySlug("header", ["nav", "inner_navs", "social"]);

  return {
    props: {
      header,
      footer,
      page: {
        ...page,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllBasicPages(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BasicPage;
