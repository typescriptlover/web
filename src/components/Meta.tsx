import { FC } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { SEO } from '@/lib/config';
import { OpenGraphMedia } from 'next-seo/lib/types';

interface Props {
   title?: string;
   description?: string;
   canonical?: string;
   noindex?: boolean;
   nofollow?: boolean;
   images?: OpenGraphMedia[];
}

const Meta: FC<Props> = (props) => (
   <>
      <Head>
         <meta charSet="UTF-8" key="charset" />
         <meta
            name="viewport"
            content="width=device-width,initial-scale=1"
            key="viewport"
         />
      </Head>

      <NextSeo
         title={props.title ? SEO.title + ' • ' + props.title : SEO.title}
         description={props.description || SEO.description}
         canonical={props.canonical || SEO.canonical}
         openGraph={{
            title: props.title ? SEO.title + ' • ' + props.title : SEO.title,
            description: props.description || SEO.description,
            url: props.canonical || SEO.canonical,
            locale: SEO.locale,
            site_name: SEO.site_name,
            images: props.images || SEO.images,
         }}
         twitter={{
            site: SEO.canonical,
            cardType: 'summary_large_image',
         }}
         noindex={props.noindex || false}
         nofollow={props.nofollow || false}
      />
   </>
);

export default Meta;
