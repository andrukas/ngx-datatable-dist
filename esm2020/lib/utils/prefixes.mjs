import { camelCase } from './camel-case';
const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
})();
export function getVendorPrefixedName(property) {
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvdXRpbHMvcHJlZml4ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsTUFBTSxTQUFTLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBRXBHLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLE1BQU0sTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqSCxNQUFNLEtBQUssR0FDVCxPQUFPLE1BQU0sS0FBSyxXQUFXO1FBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUs7YUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDUixLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELDBEQUEwRDtJQUMxRCxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFbEgsT0FBTyxHQUFHO1FBQ1IsQ0FBQyxDQUFDO1lBQ0UsR0FBRztZQUNILFNBQVMsRUFBRSxHQUFHO1lBQ2QsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHO1lBQ2YsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxRQUFnQjtJQUNwRCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztTQUNyQzthQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnLi9jYW1lbC1jYXNlJztcblxuY29uc3QgY2FjaGUgPSB7fTtcbmNvbnN0IHRlc3RTdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSA6IHVuZGVmaW5lZDtcblxuLy8gR2V0IFByZWZpeFxuLy8gaHR0cDovL2Rhdmlkd2Fsc2gubmFtZS92ZW5kb3ItcHJlZml4XG5jb25zdCBwcmVmaXggPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdHlsZXMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJycpIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXRjaCA9XG4gICAgdHlwZW9mIHN0eWxlcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgICAgLmNhbGwoc3R5bGVzKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgIC5tYXRjaCgvLShtb3p8d2Via2l0fG1zKS0vKVxuICAgICAgOiBudWxsO1xuICBjb25zdCBwcmUgPSBtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogdW5kZWZpbmVkO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRzci1kZXRlY3Qtbm9uLWxpdGVyYWwtcmVnZXhwXG4gIGNvbnN0IGRvbSA9IHR5cGVvZiBwcmUgIT09ICd1bmRlZmluZWQnID8gJ1dlYktpdHxNb3p8TVN8TycubWF0Y2gobmV3IFJlZ0V4cCgnKCcgKyBwcmUgKyAnKScsICdpJykpWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBkb21cbiAgICA/IHtcbiAgICAgICAgZG9tLFxuICAgICAgICBsb3dlcmNhc2U6IHByZSxcbiAgICAgICAgY3NzOiBgLSR7cHJlfS1gLFxuICAgICAgICBqczogcHJlWzBdLnRvVXBwZXJDYXNlKCkgKyBwcmUuc3Vic3RyKDEpXG4gICAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZWROYW1lKHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgY29uc3QgbmFtZSA9IGNhbWVsQ2FzZShwcm9wZXJ0eSk7XG5cbiAgaWYgKCFjYWNoZVtuYW1lXSkge1xuICAgIGlmIChwcmVmaXggIT09IHVuZGVmaW5lZCAmJiB0ZXN0U3R5bGVbcHJlZml4LmNzcyArIHByb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWNoZVtuYW1lXSA9IHByZWZpeC5jc3MgKyBwcm9wZXJ0eTtcbiAgICB9IGVsc2UgaWYgKHRlc3RTdHlsZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FjaGVbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2FjaGVbbmFtZV07XG59XG4iXX0=