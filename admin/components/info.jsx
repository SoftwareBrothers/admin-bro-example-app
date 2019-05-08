import React from 'react'

import { WrapperBox, StyledButton} from 'admin-bro/components'

const Info = (props) => {
  return (
    <WrapperBox border className="content">
      <h3>Demo Information</h3>
      <p>Welcome on <b>AdminBro</b> example Page</p>
      <p>
        <b>AdminBro</b> is an Autogenerated Admin Panel for Node.js apps based on React.
        By using it you can create admin like this with no efort at all.
      </p>
      <p>
        To see different usage examples visit the different resources
        in the Navigation Sidebar. I wish you a <b>Happy scrolling throughout the page</b>
      </p>
      <p>If you like it. Make sure to</p>
      <p>
        <StyledButton as="a" href="https://softwarebrothers.github.io/admin-bro-dev/">
          Check out the documentation
        </StyledButton>
      </p>
      <p>and</p>
      <p>
        <StyledButton as="a" href="https://github.com/SoftwareBrothers/admin-bro" primary>
          <span className='fa fa-star' /> Star it on Github
        </StyledButton>
      </p>
    </WrapperBox>
  )
}

export default Info