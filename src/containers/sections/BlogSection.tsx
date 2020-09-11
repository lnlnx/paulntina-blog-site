import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer } from '../../components/Grid/GridContainer';
import { GridItem } from '../../components/Grid/GridItem';
import { Card } from '../../components/Card/Card';
import { CardHeader } from '../../components/Card/CardHeader';

import { blogsSectionStyle } from '../../assets/jss/views/blogSectionStyle';
import { firestore } from '../../Firebase';
import { BlogContent } from '../MemoryPostPage';
import { rand } from '../../utils/randomId';
import GoogleImage from '../../components/GoogleImage/GoogleImage';

const useStyles = makeStyles(blogsSectionStyle);

export function BlogSection({ ...rest }) {
  const [blogs, setBlogs] = useState<BlogContent[]>([]);
  const classes = useStyles();

  useEffect(() => {
    firestore
      .collection('travel-blogs')
      .get()
      .then(
        (
          querySnapshot: firebase.firestore.QuerySnapshot<
            firebase.firestore.DocumentData
          >
        ) => {
          var blogData: BlogContent[] = [];
          querySnapshot.forEach(function (doc) {
            const post = doc.data() as BlogContent;
            post.id = doc.id;
            // doc.data() is never undefined for query doc snapshots
            blogData.push(post);
          });
          setBlogs(blogData);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const blogComponentList = blogs.map((blog: BlogContent) => {
    const redirectUrl = `/memories/${blog.id}`;
    return (
      <Card plain blog className={classes.card} key={rand(5)}>
        <GridContainer justify='space-between'>
          <GridItem xs={12} sm={5} md={4}>
            <CardHeader image plain>
              <GoogleImage
                imageName={blog.coverImage}
                shadow
                redirectUrl={redirectUrl}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h3 className={classes.cardTitle}>
              <a href={redirectUrl}>{blog.title}</a>
            </h3>
            <p className={classes.description1}>{blog.paragraphs[0]}</p>
          </GridItem>
        </GridContainer>
      </Card>
    );
  });

  return (
    <div className='cd-section' {...rest}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + ' ' + classes.mrAuto}
            >
              {blogComponentList}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
