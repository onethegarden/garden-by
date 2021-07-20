import { CreatePagesArgs } from "gatsby";
import path from "path";

export interface Data {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface AllMarkdownRemark {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  html: string;
  frontmatter: Frontmatter;
}

export interface Frontmatter {
  title: string;
}

interface GraphQLQueryResult<T> {
  errors?: any;
  data?: T;
}

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors }: GraphQLQueryResult<Data> = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const jsonData = JSON.parse(JSON.stringify(data));
  console.log(jsonData);
  if (errors) {
    throw errors;
  }

  jsonData?.allMarkdownRemark.edges.forEach(({ node }: any) => {
    console.log(node);
    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: path.resolve(__dirname, "../components/PostTemplate.tsx"),
    });
  });
}
