import React from "react";

function Information() {
  return (
    <div>
      <h1 id="content_header">About</h1>
      <div className="information">
        <div className="info">
          Engineering Career Services and Engineering Council (EXPO) have joined
          forces to host the largest career fair at the University of Illinois
        </div>

        <div className="facts">
          <table className="schedule-table">
            <tr>
              <td>
                <table className="career-fact">
                  <tr>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="graduation-cap"
                      class="svg-inline--fa fa-graduation-cap fa-w-20"
                      role="img"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                      />
                    </svg>
                  </tr>
                  <tr>10,000+</tr>
                  <tr>Students</tr>
                </table>
              </td>
              <td>
                <table className="career-fact">
                  <tr>
                    <svg
                      id="building"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="building"
                      class="svg-inline--fa fa-building fa-w-14"
                      role="img"
                      viewBox="0 0 900 512"
                    >
                      <path
                        fill="currentColor"
                        d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                      />
                    </svg>
                  </tr>
                  <tr>447+</tr>
                  <tr>Companies</tr>
                </table>
              </td>
            </tr>
          </table>
        </div>

        <div className="table-color">
          <h1 id="content_header">Schedule</h1>
          <table className="schedule-table">
            <tr>
              <td>10:00 a.m. – 7:00 p.m.</td>
              <td>
                Shuttle Service from E-14 to ARC <br />
                (Shuttle runs every 10 – 15 minutes)
              </td>
            </tr>
            <tr>
              <td>10:00 a.m. – 1:00 p.m.</td>
              <td>Arrival and Set – Up</td>
            </tr>
            <tr>
              <td>10:00 a.m. – 12:00 p.m.</td>
              <td>Recruiter Lunch</td>
            </tr>
            <tr>
              <td>12:00 p.m. – 6:00 p.m.</td>
              <td>Career Fair Open to Students</td>
            </tr>
            <tr>
              <td>6:00 p.m. – 7:00 p.m.</td>
              <td>
                Tear-Down and Shuttle Service Departures <br />
                (Shuttle runs every 10 – 15 minutes until 7:00 p.m.)
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Information;
