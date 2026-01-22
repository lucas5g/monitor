import {
  Table as TableUI,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface Props {
  headers: string[];
  caption: string
  children?: React.ReactNode;
}

export function Table(props: Readonly<Props>) {
  return (
    <TableUI>
      <TableCaption>{props.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {props.headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.children}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </TableUI>
  )
}

        {/* {invoices.map((invoice) => ( */}
          // <TableRow key={invoice.invoice}>
          //   <TableCell className="font-medium">{invoice.invoice}</TableCell>
          //   <TableCell>{invoice.paymentStatus}</TableCell>
          //   <TableCell>{invoice.paymentMethod}</TableCell>
          //   <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          // </TableRow>
        {/* ))} */}