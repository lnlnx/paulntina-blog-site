import React, { Fragment } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer } from '../../components/Grid/GridContainer';
import { GridItem } from '../../components/Grid/GridItem';
import { blogContentSectionStyle } from '../../assets/jss/views/blogContentSectionStyle';
import { grayColor } from '../../assets/jss/common';
import { BlogContent } from '../MemoryPostPage';
import GoogleImage from '../../components/GoogleImage/GoogleImage';
import { rand } from '../../utils/randomId';

const useStyles = makeStyles(blogContentSectionStyle);

export interface BlogContentSectionProps {
  className?: string;
  blog: BlogContent;
}

export function BlogContentSection(props: BlogContentSectionProps) {
  const cssStyles = useStyles();
  const imgClasses = classNames(
    cssStyles.imgRaised,
    cssStyles.imgRounded,
    cssStyles.imgFluid
  );
  const { className, blog } = props;
  const combinedClassName = classNames({
    [cssStyles.section]: true,
    ...(className ? { [className]: className !== undefined } : null),
  });

  const blogImages = blog.images.map(
    (imageName: string, index: number): React.ReactNode => (
      <GridItem
        xs={12}
        sm={4}
        md={4}
        style={{ marginTop: '10px' }}
        key={imageName + index}
      >
        <GoogleImage imageName={imageName} className={imgClasses} />
      </GridItem>
    )
  );

  return (
    <GridContainer className={combinedClassName}>
      <GridItem xs={12} sm={10} md={10}>
        <h3 className={cssStyles.title}>{blog.title}</h3>
      </GridItem>
      <GridItem xs={10} sm={7}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              textAlign: 'left',
              maxWidth: '150px',
              color: grayColor[0],
            }}
          >
            {blog.location}
          </p>
          <p
            style={{
              fontSize: '10px',
              marginLeft: '45px',
              color: grayColor[0],
            }}
          >
            {blog.temparature}
          </p>
        </div>
      </GridItem>
      {blog.images.length > 0 && (
        <Fragment>
          <GridItem xs={12} sm={10} md={10}>
            <p className={cssStyles.sectionText}>{blog.paragraphs[0]}</p>
            <p className={cssStyles.sectionSubtitle}>Photos from the trip.</p>
          </GridItem>
          <GridItem xs={12} sm={10} md={10}>
            <GridContainer>{blogImages}</GridContainer>
          </GridItem>
        </Fragment>
      )}
      {blog.paragraphs.length > 1 && (
        <GridItem xs={12} sm={10} md={10} key={rand(5)}>
          <p className={cssStyles.sectionText}>
            {blog.paragraphs.slice(1).join('<br/>')}
          </p>
        </GridItem>
      )}
    </GridContainer>
  );
}
