import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, IconButton, CircularProgress } from '@material-ui/core';
import { youtubeColor, whiteColor } from '../assets/jss/common';
import { red } from '@material-ui/core/colors';
import { BlogContentSection } from './sections/BlogContentSection';
import { storage, firestore } from '../Firebase';

const videoStyle = makeStyles({
  postContainer: {
    minHeight: '100vh',
    backgroundColor: whiteColor,
  },
  video: {
    position: 'fixed',
    width: '35%',
    left: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    '@media screen and (max-width: 576px)': {
      position: 'relative',
      width: '100%',
      height: '400px',
    },
  },
  videoContainer: {
    marginBottom: '30px',
    marginLeft: '30px',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  videoButton: {
    backgroundColor: youtubeColor,
    color: whiteColor,
    width: '40px',
    height: '40px',
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  videoTitle: {
    marginLeft: '18px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: whiteColor,
  },
  blogContainer: {
    width: '65%',
    marginLeft: '35%',
    backgroundColor: whiteColor,
    '@media screen and (max-width: 576px)': {
      width: '100%',
      marginLeft: '0',
    },
  },
});

export interface BlogContent {
  id: string;
  coverImage: string;
  images: string[];
  title: string;
  location: string;
  temparature: string;
  paragraphs: string[];
}

export interface MemoryPostPageProps {}

export const MemoryPostPage = (props: MemoryPostPageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [blogContent, setBlogContent] = useState<BlogContent | undefined>(
    undefined
  );
  let { postId }: { postId: string } = useParams();
  const cssStyles = videoStyle();

  useEffect(() => {
    firestore
      .collection('travel-blogs')
      .doc(postId)
      .get()
      .then((value) => {
        const blog = value.data() as BlogContent;
        setBlogContent(blog);
        storage
          .ref()
          .child(blog.coverImage)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
          })
          .catch((error) => {
            console.log(error);
            // Handle any errors
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className={cssStyles.postContainer}>
      <div className={cssStyles.video}>
        {imageUrl ? (
          <Fragment>
            <img
              src={imageUrl}
              className={cssStyles.image}
              alt='Background'
            ></img>
            <div className={cssStyles.videoContainer}>
              <IconButton
                aria-label='add an alarm'
                className={cssStyles.videoButton}
              >
                <i className='fas fa-play' />
              </IconButton>
              <span className={cssStyles.videoTitle}>Watch the video</span>
            </div>
          </Fragment>
        ) : (
          <CircularProgress color='secondary' />
        )}
      </div>
      {blogContent && (
        <BlogContentSection
          className={cssStyles.blogContainer}
          blog={blogContent}
        />
      )}
    </div>
  );
};
