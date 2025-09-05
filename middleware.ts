import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['es', 'en'],
    defaultLocale: 'es'
});

export const config = {
    matcher: ['/((?!_next|api|static|public|favicon.ico).*)']
};
