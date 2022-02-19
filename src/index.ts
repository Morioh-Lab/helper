/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const trim = (input: string) =>
   input.replace(/\r?\n|\r/g, ' ').replace(/ +/g, ' ');

const htmlToText = (html: string | null | undefined) =>
   isBlank(html) ? '' : trim(html.replace(/<[^>]*>/g, ''));

const delay = async (ms: number) =>
   new Promise((resolve) => setTimeout(resolve, ms));

const isNullOrUndefined = (input: any) => input === undefined || input === null;

const isBlank = (input: any) =>
   isNullOrUndefined(input) || /^[\s\xa0]*$/.test(input);

const isUrl = (input: string | null | undefined) =>
   /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(input);

const isImage = (input: string | null | undefined) =>
   /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(input);

const isObjectID = (id: any) => /^[0-9a-fA-F]{24}$/.test(id);

const now = () => Math.floor(Date.now() / 1000);

const tt = (t: any = null, unix = true) => {
   const d = unix ? now() : Date.now();

   if (!t) return d;

   if (typeof t == 'number') return d + t;

   const regex = /^(?:\-?\d+\.?\d*|\d*\.?\d+)(y|d|h|m|s)$/i;

   if (regex.test(t)) {
      const num =
         parseInt(t.replace(/^(\-?\d+\.?\d*|\d*\.?\d+)(?:y|d|h|m|s)$/i, '$1')) *
         (unix ? 1 : 1000);
      const s = t.replace(regex, '$1').toLowerCase();

      switch (s) {
         case 'y':
            return d + num * 31104000; // 60 * 60 * 24 * 30 * 12
         case 'd':
            return d + num * 86400; // 60 * 60 * 24
         case 'h':
            return d + num * 3600; // 60 * 60
         case 'm':
            return d + num * 60; // 60
         case 's':
            return d + num;
         default:
            new Error("unknown exception of 'set operation'");
      }
   }
};

const objectID = (id?: any) => {
   if (isObjectID(id)) return id;
   const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
   return (
      timestamp +
      'xxxxxxxxxxxxxxxx'
         .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
         })
         .toLowerCase()
   );
};

const LINK = (link: string, params = {}) => {
   try {
      const url = new URL(link);
      const query = url.searchParams;
      for (const key in params) {
         query.set(key, params[key]);
      }
      url.search = query.toString();
      return url;
   } catch (_) {
      return null;
   }
};

const host = (link: string) => {
   const url = LINK(link);
   return url ? url.hostname : null;
};

const numberFormat = (number: any, padding = 2, dsep = '.', tsep = ',') => {
   if (isNaN(number) || number == null) return 0;

   number = number.toFixed(~~padding);
   tsep = typeof tsep == 'string' ? tsep : ',';

   const parts = number.split('.'),
      fnums = parts[0],
      decimals = parts[1] ? (dsep || '.') + parts[1] : '';

   return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
};

const toKb = (
   num: number | null | undefined,
   suffix: any = undefined,
   decimal = 2
) => {
   if (!isNaN(suffix) && !!suffix) {
      decimal = suffix;
      suffix = undefined;
   }

   if (isNaN(num) || num == null) return 0;
   const sizes = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
   const k = 1000,
      dm = decimal || 2;

   if (num < k) return num;

   const i = suffix
      ? sizes.indexOf(suffix)
      : Math.floor(Math.log(num) / Math.log(k));
   //return parseFloat((num / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   return numberFormat(num / Math.pow(k, i), dm) + sizes[i];
};

const debounce = (func: any, wait = 300) => {
   let timeout: NodeJS.Timeout;
   return (...args: any) => {
      const later = () => {
         clearTimeout(timeout);
         func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
   };
};

const classNames = (...args: any[]) => {
   const classes = [];

   for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (!arg) continue;

      const argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
         classes.push(arg);
      } else if (Array.isArray(arg)) {
         if (arg.length) {
            // eslint-disable-next-line prefer-spread
            const inner = classNames.apply(null, arg);
            if (inner) {
               classes.push(inner);
            }
         }
      } else if (argType === 'object') {
         if (arg.toString === Object.prototype.toString) {
            for (const key in arg) {
               if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                  classes.push(key);
               }
            }
         } else {
            classes.push(arg.toString());
         }
      }
   }

   return classes.join(' ');
};

export {
   now,
   tt,
   trim,
   classNames,
   htmlToText,
   isBlank,
   isImage,
   isUrl,
   isNullOrUndefined,
   isObjectID,
   objectID,
   debounce,
   delay,
   toKb,
   numberFormat,
   LINK,
   host,
};
