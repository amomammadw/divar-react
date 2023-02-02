function AppButton(props) {
    return (
        <button className="px-4 py-2 hover:bg-gray-200 hover:font-semibold transition-all flex items-center rounded-md justify-center">
            {props.children}
        </button>
    )
}

export default AppButton