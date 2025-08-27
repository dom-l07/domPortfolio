export const Logo = ({ className, ...props }: React.ComponentProps<"svg">) => {
    return (
        <svg
            id="mainLogo"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 200"
            className={className}
        >
            <g id="Logo" data-name="Logo">
                <path
                    className="logo-fill"
                    d="M200,0v150h-48.03c6.53-6.16,11.6-13.47,15.18-21.96,3.58-8.49,5.41-17.76,5.41-27.82s-1.78-19.5-5.41-27.95c-3.58-8.44-8.69-15.76-15.3-21.96-6.62-6.2-14.31-10.98-23.13-14.31s-18.46-4.99-28.91-4.99h-24.81V0h125Z"/>
                <path
                    className="logo-fill"
                    id="leftL" d="M112,169.13c-3.92.57-8.02.82-12.18.87h-55.82V43H0v157h112v-30.87Z"/>
                <path
                    className="logo-fill"
                    id="centerD"
                    d="M121.42,62.15c-6.24-3.43-13.57-5.15-21.97-5.15h-24.45v85h24.45c8.41,0,15.77-1.67,22.1-5.02,6.32-3.35,11.17-8.24,14.6-14.69,3.44-6.45,5.1-14.06,5.1-22.89s-1.76-16.32-5.23-22.64c-3.47-6.31-8.36-11.16-14.6-14.6Z"/>
            </g>
        </svg>
    );   
};