const inputRows = document.querySelector('#input_rows')
const inputColumns = document.querySelector('#input_columns')
const inputTableWidth = document.querySelector('#input_table_width')
const inputTdBgColor = document.querySelector('#td-bg-color')
const inputThBgColor = document.querySelector('#th-bg-color')
const inputBorderBgColor = document.querySelector('#border-bg-color')
const inputBorderPx = document.querySelector('#border-px')
const inputStripBgColor = document.querySelector('#strip-bg-color')
const inputFontColor = document.querySelector('#font-color')
const inputFontSize = document.querySelector('#font-size')
const inputTextAlign = document.querySelector('#text-align')
const inputFontFamily = document.querySelector('#font-family')

const table = document.querySelector('#genarate_table')
const getCode = document.querySelector('#get_code')
const btnGenerate = document.querySelector('#btn_genarate')
const btnGetCode = document.querySelector('#btn_getcode')
const formContent = document.querySelector('.form-content')

// Copy function
const copyFunction = (element) => {
    let textArea = document.createElement("textarea");
    textArea.value = element.textContent; //hexacode isthe  element which's content to be copied
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove()
}
btnGetCode.addEventListener('click', function () {
    let myCode = table.innerHTML
    getCode.style.display = 'block'
    getCode.append(myCode)
})
// row genarato
btnGenerate.addEventListener('click', function () {
    let userInputRows = inputRows.value
    let userInputColumns = inputColumns.value
    let userInputTableWidth = inputTableWidth.value
    let userInputTdBgColor = inputTdBgColor.value
    let userInputThBgColor = inputThBgColor.value
    let userInputBorderBgColor = inputBorderBgColor.value
    let userinputBorderPx = inputBorderPx.value
    let userInputStripBgColor = inputStripBgColor.value
    let userInputFontColor = inputFontColor.value
    // let userInputFontStyle = inputFontStyle.value
    let userInputFontSize = inputFontSize.value
    let userInputTextAlign = inputTextAlign.value
    let userInputFontFamily = inputFontFamily.value
    table.innerHTML = ''

    const tableGenerator = () => {
        const thHeadGenarator = () => {
            for (let i = 0; i < userInputColumns; i++) {
                let tHead = document.createElement('th')
                tHead.textContent = `Head ${i + 1}`
                tHead.style.border = userinputBorderPx + 'px' + ' solid' + userInputBorderBgColor
                tHead.style.background = '#ccc' || userInputThBgColor
                tHead.style.textAlign = userInputTextAlign
                tHead.style.fontFamily = userInputFontFamily
                table.appendChild(tHead)
            }
        }
        thHeadGenarator()

        for (let i = 0; i < userInputRows; i++) {
            const row = document.createElement('tr')

            if (i % 2 == 0) {
                row.style.background = userInputStripBgColor
            }

            table.appendChild(row)

            const columnsGenarator = () => {
                for (let i = 0; i < userInputColumns; i++) {
                    let columns = document.createElement('td')
                    columns.textContent = 'td column'
                    columns.style.border = userinputBorderPx + 'px' + ' solid' + userInputBorderBgColor
                    columns.style.textAlign = userInputTextAlign
                    columns.style.fontFamily = userInputFontFamily
                    row.appendChild(columns)
                }
            }
            columnsGenarator()
        }
    }
    tableGenerator()

    let tdWidth = table.style.width = userInputTableWidth + '%'
    let tdFont = table.style.color = userInputFontColor
    let tdFontSize = table.style.fontSize = userInputFontSize + 'px'

    // let tdFontStyle = table.style.font-family = userInputFontColor
    let tdBg = table.style.background = userInputTdBgColor
    // let tdfontFamily = table.style.fontFamily = userInputFontFamily

    const liveFunction = () => {
        formContent.addEventListener('click', function () {
            table.innerHTML = ""
            tableGenerator()
        })
    }
    liveFunction()

    btnGetCode.addEventListener('click', function () {
        let myCode = table.innerHTML
        getCode.style.display = 'block'
        getCode.append(myCode)
    })
})