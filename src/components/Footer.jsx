export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '10px 0',
            fontSize: '12px',
            color: '#888',
            marginTop: '20px',
            borderTop: '1px solid #eee'
        }}>
            © {new Date().getFullYear()} Всі права захищені. Розробник: Гребенюк Володимир
        </footer>
    );
}
