import React from 'react'
import { Typography } from '@mui/material'
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>Heading 1</Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      {/* here if we use component = "h1" then this h5 tag will be h1 and styles will be applied. */}
      <Typography variant='h5' component='h1'>
        Heading 5
      </Typography>
      {/* using guttorBottom (by default false) will provide bottom margin. the Higher the tag the higher the margin. */}
      <Typography variant='h6' gutterBottom>
        Heading 6
      </Typography>
      {/* There are two variants of h6 c and subtitle2 
        Sub title 1 has a larger font size but lesser font weight but vice versa for subtitle two.*/}
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>

      {/* for body element like p tag use body1= 16px or body2 = smaller variant*/}
      {/* body1 will be the default value */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut
        impedit possimus id earum expedita eligendi temporibus. Hic, molestias.
        Error inventore amet excepturi modi? Qui perspiciatis iusto dolor sunt
        deleniti?
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut
        impedit possimus id earum expedita eligendi temporibus. Hic, molestias.
        Error inventore amet excepturi modi? Qui perspiciatis iusto dolor sunt
        deleniti?
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam
        sed vitae, magnam libero commodi quo optio porro officia. Quod cumque
        magni modi earum expedita assumenda fuga, minima pariatur nostrum.
      </Typography>
    </div>
  )
}
