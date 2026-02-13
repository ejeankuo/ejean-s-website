import { useEffect,useState } from 'react';

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", isDark)
    },[isDark])

    return {isDark, setIsDark };
}