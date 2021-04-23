import React, { forwardRef } from 'react'
import { useMediaQuery } from '@material-ui/core'

import { match } from '../_contexts/Theme'
import MobileFirstSwitch, {
  Breakpoint,
  Default,
} from '../MobileFirstSwitch/MobileFirstSwitch'

const MobileFirstVideo = forwardRef((props, ref) => {
  const {
    isFullViewport = false,
    quality = 80,
    publicId,
    portraitEnabled = true,
    trackTextId,
    controls,
    ...rest
  } = props
  const isPortrait = useMediaQuery(match.isPortrait)
  const trackElement = trackTextId ? (
    <track
      default
      src={`https://res.cloudinary.com/klick/raw/upload/${trackTextId}.vtt`}
    />
  ) : null
  const videoProps = {
    ref,
    crossOrigin: 'anonymous',
    tabIndex: controls ? '-1' : null,
  }
  return (
    <>
      {isFullViewport && isPortrait && portraitEnabled ? (
        <MobileFirstSwitch>
          <Default>
            <video {...videoProps} {...rest} key={isFullViewport ? 1 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_1624,q_${quality},vc_h265,w_750/v1/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_webm,h_1624,q_${quality},vc_vp9,w_750/v1/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_1624,q_${quality},vc_auto,w_750/v1/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Default>
          <Breakpoint query={match.isSM}>
            <video {...videoProps} {...rest} key={isFullViewport ? 2 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_2048,q_${quality},vc_h265,w_1536/v1/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_webm,h_2048,q_${quality},vc_vp9,w_1536/v1/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_2048,q_${quality},vc_auto,w_1536/v1/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Breakpoint>
        </MobileFirstSwitch>
      ) : (
        <MobileFirstSwitch>
          <Default>
            <video {...videoProps} {...rest} key={isFullViewport ? 3 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_h265,w_992/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_${quality},vc_vp9,w_992/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_auto,w_992/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Default>
          <Breakpoint query={match.isMD}>
            <video {...videoProps} {...rest} key={isFullViewport ? 4 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_h265,w_1200/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_${quality},vc_vp9,w_1200/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_auto,w_1200/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Breakpoint>

          <Breakpoint query={match.isLG}>
            <video {...videoProps} {...rest} key={isFullViewport ? 5 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_h265,w_1600/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_${quality},vc_vp9,w_1600/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_auto,w_1600/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Breakpoint>

          <Breakpoint query={match.isXL}>
            <video {...videoProps} {...rest} key={isFullViewport ? 6 : null}>
              {trackElement}
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_h265,w_1920/${publicId}.mp4`}
                type="video/mp4; codecs=hvc1"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_${quality},vc_vp9,w_1920/${publicId}.webm`}
                type="video/webm; codecs=vp9"
              />
              <source
                src={`https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_${quality},vc_auto,w_1920/${publicId}.mp4`}
                type="video/mp4"
              />
            </video>
          </Breakpoint>
        </MobileFirstSwitch>
      )}
    </>
  )
})

export default MobileFirstVideo
