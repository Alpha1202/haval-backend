export const waitinglistMailTemplate = (name) => {
    const template = `
    <!DOCTYPE html>
<html
  style="
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0;
  "
>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Verify Account</title>

    <style type="text/css">
      img {
        max-width: 100%;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
        line-height: 1.6em;
      }
      body {
        background-color: #f6f6f6;
      }
      @media only screen and (max-width: 640px) {
        body {
          padding: 0 !important;
        }
        h1 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
        }
        h2 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
        }
        h3 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
        }
        h4 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
        }
        h1 {
          font-size: 22px !important;
        }
        h2 {
          font-size: 18px !important;
        }
        h3 {
          font-size: 16px !important;
        }
        .container {
          padding: 0 !important;
          width: 100% !important;
        }
        .content {
          padding: 0 !important;
        }
        .content-wrap {
          padding: 10px !important;
        }
        .invoice {
          width: 100% !important;
        }
      }
    </style>
  </head>

  <body
    itemscope
    itemtype="http://schema.org/EmailMessage"
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      width: 100% !important;
      height: 100%;
      line-height: 1.6em;
      background-color: #f6f6f6;
      margin: 0;
    "
    bgcolor="#f6f6f6"
  >
    <table
      class="body-wrap"
      style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        width: 100%;
        background-color: #f6f6f6;
        margin: 0;
      "
      bgcolor="#f6f6f6"
    >
      <tr
        style="
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
          margin: 0;
        "
      >
        <td
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            margin: 0;
          "
          valign="top"
        ></td>
        <td
          class="container"
          width="600"
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            display: block !important;
            max-width: 600px !important;
            clear: both !important;
            margin: 0 auto;
          "
          valign="top"
        >
          <div
            class="content"
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              max-width: 600px;
              display: block;
              margin: 0 auto;
              padding: 20px;
            "
          >
            <table
              class="main"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              itemprop="action"
              itemscope
              itemtype="http://schema.org/ConfirmAction"
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                border-radius: 3px;
                background-color: #fff;
                margin: 0;
                border: 1px solid #e9e9e9;
              "
              bgcolor="#fff"
            >
              <tr
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                "
              >
                <td
                  class="content-wrap"
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    vertical-align: top;
                    margin: 0;
                    padding: 20px;
                  "
                  valign="top"
                >
                  <meta
                    itemprop="name"
                    content="Confirm Email"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 20px;
                      margin: 0;
                    "
                  />
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    "
                  >
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 20px;
                          font-weight: bold;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                          color: #0055aa;
                          font-family: Poppins;
                        "
                        valign="top"
                      >
                        Hi ${name}.
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          text-align: center;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        <img
                          src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1617561697/Haval/haval_nc1tkg.png"
                          alt="haval illustrator"
                          width="300"
                        />
                      </td>
                    </tr>

                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    ></tr>

                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-weight: bold;
                          font-size: 15px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                          color: #0055aa;
                          font-family: Poppins;
                        "
                        valign="top"
                      >
                        Thank you for signing up on our waiting list for Haval.
                        We will communicate all updates and developments as
                        regards our product and getting you on board.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;
return template
}