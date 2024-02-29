// useRowState.js
import { useState } from 'react';

const useRowState = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return {
        open,
        setOpen, // <- Corrected
        toggleOpen
    };
};

export default useRowState;
