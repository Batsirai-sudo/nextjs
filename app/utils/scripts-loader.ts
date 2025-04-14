export const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
    });
};

export const loadScriptsSequentially = async (scripts: string[]) => {
    try {
        for (const script of scripts) {
            await loadScript(script);
        }
    } catch (error) {
        console.error(error);
    }
};
