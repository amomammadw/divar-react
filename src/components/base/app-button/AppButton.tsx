import { IButton } from "../../../interfaces/IComponents"
function AppButton(props: IButton) {
    return (
        <button className={'px-4 py-2 hover:font-semibold transition-all flex items-center rounded-md justify-center' + ' ' + (props.variant === 'primary' ? 'bg-primary text-white' : 'hover:bg-gray-200')}>
            {props.children}
        </button >
    )
}

export default AppButton