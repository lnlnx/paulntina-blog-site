import React, { useState, useEffect, Fragment } from 'react';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';

import { destinationMainPageStyle } from '../assets/jss/views/destinationMainPageStyle';
import classNames from 'classnames';
import DestinationCover from './DestinationCover';
import { DestinationPost } from './sections/DestinationSection';
import { firestore } from '../Firebase';

const useStyles = makeStyles(destinationMainPageStyle);

export interface DestinationMainPageProps {
  rootUrl: string;
}

export const DestinationMainPage = (props: DestinationMainPageProps) => {
  const classes = useStyles();

  const [mainPageData, setMainPageData] = useState<{
    [key: string]: DestinationPost[];
  }>({});

  useEffect(() => {
    firestore
      .collection('plan-blogs')
      .get()
      .then(
        (
          querySnapshot: firebase.firestore.QuerySnapshot<
            firebase.firestore.DocumentData
          >
        ) => {
          var blogData: { [key: string]: DestinationPost[] } = {};
          querySnapshot.forEach(function (doc) {
            const post = doc.data() as DestinationPost;
            post.id = doc.id;
            if (!blogData[post.continent]) {
              blogData[post.continent] = [];
            }
            blogData[post.continent].push(post);
          });

          setMainPageData(blogData);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const headerStyle = classNames({
    [classes.textCenter]: true,
    [classes.header]: true,
  });

  const mainPageBody =
    Object.keys(mainPageData).length > 0
      ? Object.keys(mainPageData).map((key: string) => {
          const postList = mainPageData[key];
          return (
            <Fragment key={key}>
              <GridItem xs={12}>
                <div className={classes.sectionTitle}>{key}</div>
              </GridItem>
              <GridItem xs={12}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {postList.map((data: DestinationPost) => {
                    return (
                      <DestinationCover
                        rootUrl={props.rootUrl}
                        post={data}
                        key={data.id}
                      ></DestinationCover>
                    );
                  })}
                </div>
              </GridItem>
            </Fragment>
          );
        })
      : null;

  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={headerStyle}>
            <div className={classes.title}>Plans</div>
            <div className={classes.description}>
              Places that we've been planning to discover.
            </div>
          </GridItem>
          {mainPageBody}
        </GridContainer>
      </div>
    </div>
  );
};
