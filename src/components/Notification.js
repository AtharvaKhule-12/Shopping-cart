import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    const open = useSelector(state => state.ui.open)
    const message = useSelector(state => state.ui.message)
    const type = useSelector(state => state.ui.type)

    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} key={'bottom'+'center'}><Alert severity={type}>{message}</Alert></Snackbar>
        </div>
    )
}

export default Notification