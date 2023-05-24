import React from 'react'

const StarredMenu = () => {
  return (
    <>
     <div className="dropdown px-2">
          <a
            className="dropdown_toggle "
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Starred <i class="fa-solid fa-chevron-down"></i>
          </a>

          {/* <ul
            className="dropdown-menu scrollable-menu px-3 mt-3"
            aria-labelledby="dropdownMenuLink"
          >

            <div className="mb-2">
              <small>Your Workspaces</small>
            </div>

                      <div className="mb-2">
              <small>Guest Workspaces</small>
            </div>
              
          </ul> */}
        </div></>
  )
}

export default StarredMenu