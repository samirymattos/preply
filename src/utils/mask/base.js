export const baseMask = (base) => {
    if (base.length === 9) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 8) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 5) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 4) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 3) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 2) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    if (base.length === 1) {
        return base.replace(/[^\d\s-/]/g, "").replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    return base;
}

export default baseMask;