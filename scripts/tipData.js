const tipCollection = [
    {text:"tip text 1"},
    {text:"tip text 2"},
    {text:"tip text 3"}
 ]

export const useTip = () => {
    return tipCollection.slice()
}

export const addTip = (tip) => {
    tipCollection.push(tip)
}