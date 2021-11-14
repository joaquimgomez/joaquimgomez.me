export function iconify(input = '') {
    const replacers = [
        {
            in: /\+/g,
            out: "plus"
        },
        {
            in: /\./g,
            out: "dot"
        },
        {
            in: /&/g,
            out: "-and-"
        },
        {
            in: /\s/g,
            out: ''
        },
        {
            in: '_',
            out: ''
        },
        {
            in: '-',
            out: ''
        }
    ]
    let output = input.toLowerCase()
    replacers.forEach(replacer => {
        output = output.replace(replacer.in, replacer.out)
    })
    return output
}