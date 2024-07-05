import Alert from "../../components/alert/alert";
import {toast} from "react-toastify";

const showSuccess = (title, message) => {
    toast.success(
        <Alert
            title={title}
            message={message}
        />
    )
}


const showError = (title, message) => {
    toast.error(
        <Alert
            title={title}
            message={message}
        />
    )
}


const showInfo = (title, message) => {
    toast.info(
        <Alert
            title={title}
            message={message}
        />
    )
}



export {
    showSuccess,
    showError,
    showInfo
}
