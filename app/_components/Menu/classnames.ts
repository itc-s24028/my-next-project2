export default function cx(...classNames: (string | boolean)[]) {
    return classNames.join(" ");
}