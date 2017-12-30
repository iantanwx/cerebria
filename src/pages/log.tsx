import * as React from 'react';
import Link from 'gatsby-link';
import { map } from 'lodash';
import { Row, Col as Column } from 'react-styled-flexboxgrid';

import { Header1, Header3 } from '../components/Headers';
import { PostItem } from '../components/Posts';
// import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';

export default class LogPage extends React.Component<any> {
  render() {
    return (
        <Row>
          <Column md={12}>
            <Header1>Log</Header1>
            <Header3>Programming, coffee, and life.</Header3>
          </Column>
          <Column xs={12} sm={12} mdOffset={2} lgOffset={2} md={8} lg={8}>
            {map(this.props.data.posts.edges, ({ node }) => {
              return (
                <PostItem
                  key={node.fields.id}
                  excerpt={node.excerpt}
                  date={node.frontmatter.updatedDate}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                />
              );
            })}
          </Column>
        </Row>
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
        fileAbsolutePath: { regex: "/log/" }
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
