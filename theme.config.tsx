import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";

const logo = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 1494 1494"
      className="p-3 md:p-2"
    >
      <path fill="#939393" d="M1158 783.996H378v161h780v-161Z" />
      <path
        className="text-black dark:text-white"
        d="m218.268 1051.94-1.732 1 1.732 1 530.007 306 1.732 1 1.732-1L1281.65 1054l1.73-1-1.73-1-530.008-306-1.732-1-1.732 1-529.91 305.94Z"
      />
      <path
        className="text-white dark:text-black"
        d="m543.999 865.031-122.087 70.487 530.007 306.002 122.091-70.49-530.011-305.999Z"
      />
      <path
        className="text-white dark:text-black"
        d="m1074.4 935.301-122.105-70.5L421.949 1171l122.11 70.5L1074.4 935.301Z"
      />
      <path
        fillRule="evenodd"
        className="text-black dark:text-white"
        d="M952.382 864 748 746V134l530.01 306v612l-204.09-117.83v-3.3c0-38.75-27.2-85.875-60.77-105.255-33.557-19.375-60.768-3.675-60.768 35.085v3.3Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        className="text-white dark:text-black"
        d="M1046.67 557.916c-23.96-13.395-35.99-20.255-36.08-20.581-4.1-15-11.302-30.298-24.294-37.799-12.367-7.14-23.037-2.94-23.037 11.9 0 42.84 88.751 66.08 88.751 147.28 0 26.6-17.46 56.28-64.017 29.4-35.888-20.72-61.834-55.86-67.654-101.78l39.237 22.528c.089.387.181.773.275 1.158 4.156 17.072 12.417 32.056 27.9 40.994 14.789 8.54 27.159 6.72 27.159-12.04 0-43.68-88.751-69.72-88.751-143.92 0-39.2 28.613-50.68 61.349-31.78 32.012 18.48 56.012 56.14 59.162 94.64Zm58.74 194.63-37.83-21.84v-217.84l37.83 21.84v217.84Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        className="text-black dark:text-white"
        d="m424.518 933.996-.011-3.3c-.136-38.759 26.965-85.879 60.524-105.254 33.567-19.38 60.878-3.665 61.014 35.084l.011 3.3 204.088-117.83L748.007 134 218 440l2.136 612 204.382-118.004Z"
        clipRule="evenodd"
      />
      <path
        className="text-white dark:text-black"
        d="m303.562 588.999 35.126-20.28 24.495 133.624.433-.25 28.306-164.109 32.857-18.97 26.554 134.249.511-.295 26.811-165.059 34.45-19.89-44.008 242.534-34.858 20.125-26.331-132.564-.675.39-27.121 163.424-35.507 20.5-41.043-193.429Zm249.146-143.845 55.374-31.97 55.749 184.939-36.234 20.92-12.129-41.315-63.081 36.42-9.063 53.55-35.291 20.375 44.675-242.919Zm21.266 41.24-15.043 88.344 47.684-27.53-17.867-69.344-14.774 8.53Zm377.983 378.602 122.113 70.5L544.059 1241.5l-122.11-70.5 530.008-306.004Z"
      />
      <path
        fillRule="evenodd"
        className="text-white dark:text-black"
        d="m952 864.685 50.12 29.5 71.42 40.67v-3.3c0-38.75-27.2-85.875-60.77-105.255-33.559-19.375-60.77-3.675-60.77 35.085v3.3Zm-406.462-1-50.118 29.5-71.42 40.67v-3.3c0-38.75 27.202-85.875 60.769-105.255 33.559-19.375 60.769-3.675 60.769 35.085v3.3Z"
        clipRule="evenodd"
      />
    </svg>
    {/* eslint-disable-next-line */}
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
      svg {
        width: 5rem;
        height: 5rem;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/wasix-org",
  },
  docsRepositoryBase: "https://github.com/wasmerio/wasix-docs/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
  logo,
  chat: {
    link: "https://discord.gg/rWkMNStrEW",
  },
  head: function useHead() {
    const { title } = useConfig();
    const socialCard = "https://wasix.org/og.png";

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="WASIX" content="The superset of WASI" />
        <meta name="og:WASIX" content="The superset of WASI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="wasix.org" />
        <meta name="twitter:url" content="https://wasix.org" />
        <meta name="og:title" content={title ? title + " – WASIX" : "WASIX"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="WASIX" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },

  editLink: {
    text: "Edit this page on GitHub →",
  },
  banner: (() => {
    return {
      key: "2.0-release",
      text: (
        <a href="/docs/language-guide/rust/tutorials/wasix-grpc" target="_self">
          📖 New Tutorial released - WASIX with gRPC. Read the full tutorial →
        </a>
      ),
    };
  })(),
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: function customFooter() {
      const { resolvedTheme } = useTheme();
      return (
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>
            <a
              className="flex items-center gap-1 text-current w-full"
              target="_blank"
              rel="noopener noreferrer"
              title="wasmer.io homepage"
              href="https://wasmer.io"
            >
              <span className="whitespace-nowrap mr-2 text-md dark:text-gray-100 text-gray-800">
                Made with ♥️ at
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={resolvedTheme === "dark" ? "#9ca3af" : "#4b5563"}
                viewBox="0 0 147 44"
                width="121px"
              >
                <path
                  d="M48,13.09c1.01,0,1.97-0.01,2.93,0.01c0.09,0,0.21,0.18,0.25,0.29c0.34,1.24,0.67,2.49,1.01,3.73
		c0.85,3.17,1.7,6.34,2.56,9.51c0.04,0.13,0.08,0.26,0.14,0.48c0.07-0.18,0.11-0.27,0.13-0.36c1.28-4.39,2.55-8.78,3.83-13.17
		c0.18-0.61,0.07-0.5,0.67-0.5c0.56-0.01,1.12-0.01,1.68,0c0.61,0.01,0.49-0.09,0.66,0.48c0.8,2.75,1.59,5.5,2.38,8.25
		c0.48,1.67,0.97,3.35,1.45,5.02c0.02,0.07,0.05,0.14,0.1,0.29c0.1-0.32,0.17-0.57,0.24-0.83c1.16-4.3,2.31-8.61,3.46-12.91
		c0.06-0.21,0.13-0.32,0.38-0.31c0.83,0.02,1.67,0.01,2.5,0.01c0.08,0,0.17,0.01,0.29,0.02c-0.02,0.12-0.04,0.22-0.06,0.31
		c-1.63,5.78-3.27,11.56-4.9,17.35c-0.08,0.29-0.2,0.38-0.5,0.37c-0.91-0.02-1.82-0.02-2.73,0c-0.25,0-0.34-0.08-0.41-0.32
		c-1.18-4.12-2.38-8.24-3.58-12.35c-0.03-0.12-0.07-0.23-0.18-0.35c-0.13,0.45-0.27,0.89-0.4,1.34c-1.11,3.8-2.21,7.6-3.31,11.41
		c-0.06,0.21-0.16,0.28-0.38,0.27c-0.95-0.01-1.9-0.01-2.85,0c-0.23,0-0.31-0.08-0.37-0.29c-1.64-5.81-3.29-11.62-4.93-17.44
		C48.05,13.33,48.03,13.24,48,13.09z"
                />
                <path
                  d="M101.39,18.27c0.91,0,1.81,0,2.74,0c0,0.47,0,0.93,0,1.38c0.02,0.02,0.04,0.03,0.07,0.05
		c0.91-1.27,2.17-1.79,3.68-1.78c1.54,0.01,2.75,0.64,3.57,1.98c0.05-0.04,0.09-0.06,0.11-0.09c0.92-1.31,2.22-1.87,3.78-1.89
		c1.73-0.01,3.16,0.59,4.12,2.09c0.61,0.95,0.81,2.01,0.81,3.12c0.01,2.57,0,5.14,0.01,7.71c0,0.25-0.09,0.3-0.32,0.3
		c-0.71-0.01-1.42-0.02-2.12,0c-0.28,0.01-0.36-0.07-0.36-0.35c0.01-2.43,0.01-4.86,0-7.29c0-0.43-0.04-0.87-0.16-1.28
		c-0.32-1.13-1.21-1.73-2.41-1.7c-1.39,0.04-2.36,0.85-2.61,2.26c-0.08,0.45-0.11,0.92-0.11,1.39c-0.01,2.19,0,4.38,0,6.56
		c0,0.12,0,0.25,0,0.39c-0.13,0.01-0.22,0.02-0.32,0.02c-0.71,0-1.42-0.01-2.12,0.01c-0.29,0.01-0.36-0.09-0.35-0.36
		c0.01-2.4,0.01-4.8,0-7.2c0-0.44-0.02-0.9-0.13-1.32c-0.36-1.45-1.78-2.12-3.29-1.58c-1.04,0.38-1.56,1.18-1.75,2.22
		c-0.08,0.41-0.09,0.84-0.1,1.26c-0.01,2.2-0.01,4.4,0,6.6c0,0.28-0.07,0.39-0.37,0.38c-0.79-0.02-1.58-0.01-2.39-0.01
		C101.39,26.84,101.39,22.57,101.39,18.27z"
                />
                <path
                  d="M83.48,19.99c0-0.59,0-1.15,0-1.72c0.93,0,1.83,0,2.75,0c0,4.27,0,8.54,0,12.84c-0.9,0-1.8,0-2.75,0
		c0-0.57,0-1.14,0-1.76c-0.11,0.1-0.16,0.14-0.21,0.19c-1.16,1.4-2.68,1.96-4.46,1.92c-3.18-0.08-5.72-2.55-6.16-5.66
		c-0.35-2.47,0.34-4.6,2.19-6.31c2.12-1.95,5.6-2.11,7.73-0.36C82.89,19.38,83.15,19.68,83.48,19.99z M79.42,28.81
		c2.33,0,4.06-1.76,4.06-4.12c0-2.35-1.74-4.12-4.07-4.12c-2.34,0-4.09,1.77-4.08,4.14C75.35,27.07,77.09,28.81,79.42,28.81z"
                />
                <path
                  d="M125.49,25.88c0.36,1.44,1.18,2.41,2.56,2.79c1.87,0.53,3.56,0.25,4.91-1.34c0.74,0.43,1.48,0.87,2.31,1.35
		c-0.4,0.43-0.75,0.85-1.15,1.21c-1.13,1-2.48,1.46-3.97,1.55c-1.73,0.1-3.37-0.22-4.82-1.23c-1.48-1.03-2.34-2.48-2.63-4.24
		c-0.33-1.98,0.02-3.84,1.24-5.47c1.06-1.41,2.5-2.21,4.24-2.48c1.38-0.22,2.72-0.1,3.99,0.52c1.94,0.95,3.05,2.55,3.52,4.62
		c0.18,0.8,0.2,1.61,0.1,2.43c-0.03,0.26-0.13,0.3-0.36,0.3c-3.17-0.01-6.34,0-9.51,0C125.79,25.88,125.66,25.88,125.49,25.88z
		 M132.97,23.58c0.09-1.54-1.62-3.08-3.47-3.14c-2.4-0.08-3.78,1.53-3.99,3.14C128,23.58,130.49,23.58,132.97,23.58z"
                />
                <path
                  d="M90.99,27.08c0.08,0.16,0.15,0.32,0.24,0.46c0.62,1.03,1.59,1.39,2.72,1.35c0.46-0.02,0.96-0.1,1.38-0.29
		c0.93-0.41,1-1.57,0.11-2.06c-0.59-0.33-1.27-0.5-1.91-0.73c-0.66-0.23-1.33-0.41-1.98-0.67c-1.65-0.67-2.45-1.74-2.43-3.28
		c0.03-1.68,0.87-2.87,2.4-3.48c2.1-0.83,4.12-0.64,5.94,0.79c0.47,0.37,0.83,0.84,1.12,1.42c-0.77,0.43-1.53,0.86-2.32,1.3
		c-0.07-0.11-0.13-0.19-0.18-0.28c-0.68-1.11-2.34-1.54-3.47-0.9c-0.86,0.48-0.92,1.53-0.07,2.02c0.53,0.3,1.15,0.47,1.73,0.68
		c0.77,0.27,1.56,0.46,2.31,0.77c2.33,0.96,3.05,3.67,1.5,5.61c-0.68,0.85-1.61,1.28-2.65,1.5c-1.51,0.31-2.99,0.23-4.41-0.4
		c-1.01-0.45-1.77-1.18-2.29-2.15c-0.11-0.21-0.1-0.32,0.12-0.45c0.63-0.35,1.24-0.72,1.87-1.08C90.81,27.17,90.9,27.13,90.99,27.08
		z"
                />
                <path
                  d="M138.3,31.14c0-4.32,0-8.58,0-12.86c0.92,0,1.82,0,2.76,0c0,0.66,0,1.3,0,1.94c0.88-1.52,2.22-2.16,3.94-2.19
		c0,0.99,0,1.97,0,3c-0.16,0-0.32-0.01-0.49,0c-1.13,0.06-2.14,0.41-2.83,1.37c-0.41,0.58-0.6,1.24-0.61,1.94
		c-0.02,2.12-0.01,4.25-0.02,6.37c0,0.43,0,0.43-0.43,0.43C139.87,31.14,139.1,31.14,138.3,31.14z"
                />
                <path
                  d="M11.75,17.3c0,0.04,0,0.08,0,0.12c0,1.39-0.9,1.99-2.01,1.35c-1.11-0.64-2.01-2.28-2.01-3.67
		c0-0.04,0-0.08,0-0.12L1,11.09v21.88l17.5,10.1V21.19L11.75,17.3z"
                />
                <path
                  d="M20.5,12.25c0,0.04,0,0.08,0,0.12c0,1.39-0.9,1.99-2.01,1.35c-1.11-0.64-2.01-2.28-2.01-3.67
		c0-0.04,0-0.08,0-0.12L9.75,6.05v7.83l10.72,6.19v14.05l6.78,3.92V16.16L20.5,12.25z"
                />
                <path
                  d="M29.25,7.21c0,0.04,0,0.08,0,0.12c0,1.39-0.9,1.99-2.01,1.35c-1.11-0.64-2.01-2.28-2.01-3.67
		c0-0.04,0-0.08,0-0.12L18.5,1v7.83l10.72,6.19v14.05L36,32.98V11.11L29.25,7.21z"
                />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} Wasmer Inc.
          </p>
        </div>
      );
    },
  },
};

export default config;
