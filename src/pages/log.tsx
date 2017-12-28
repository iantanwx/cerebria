import * as React from 'react';
import Link from 'gatsby-link';
import { map } from 'lodash';

import { PostItem } from '../components/Posts';
// import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';

export default class LogPage extends React.Component<any> {
  render() {
    return (
      <div>
        {map(this.props.data.posts.edges, ({ node }) => {
          return (
            <PostItem
              key={node.fields.id}
              date={node.frontmatter.updatedDate}
              title={node.frontmatter.title}
              slug={node.fields.slug}
            />
          );
        })}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query PageBlog {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
            id
          }
          frontmatter {
            title
            updatedDate(formatString: "DD MMMM, YYYY")
            image {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 700, height: 100) {
                    src
                    srcSet
                  }
                }
              }
            }
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
                    responsiveResolution(width: 35, height: 35) {
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
