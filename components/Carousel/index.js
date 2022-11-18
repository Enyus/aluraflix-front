/* eslint-disable react/prop-types */
import React from 'react';
import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';
import { ExtraLink, Title, VideoCardGroupContainer } from './styles';

function Carousel({
  ignoreFirstVideo,
  category,
  videos
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra || "";
  let categoryTextColor = 'white';
  if (categoryColor =='white') {
    categoryTextColor = 'black'
  }

  // console.log(videos)
  // console.log(category)
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red', color: categoryTextColor, textTransform: 'capitalize' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
