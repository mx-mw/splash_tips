import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function BetsPage() {

    const bets = [
        {
            placedBy: "Jane Smith",
            betId: 1,
            assassin: "John Doe",
            betType: "Kills Someone",
            price: "$100",
            odds: "2:1"
        },
        {
            placedBy: "Jane Smith",
            assassin: "John Doe",
            betType: "Kills Someone",
            price: "$100",
            odds: "2:1",
            betId: 2,
        },
        {
            placedBy: "Jane Smith",
            assassin: "John Doe",
            betType: "Kills Someone",
            price: "$100",
            odds: "2:1",
            betId: 3,
        },

    ]
    return <>
        <header className="flex h-16 shrink-0 p-4 items-center gap-2 transition-[width,height] ease-linear bg-nav-background border-b-nav-border border-b-[1px] group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <h1 className="text-lg font-semibold">Bets</h1>
        </header>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={50} className="p-3">
                <Table className="rounded-md border"> 
                    <TableHeader className="bg-slate-100 rounded-md">
                        <TableRow>
                            <TableHead>
                                Placed By
                            </TableHead>
                            <TableHead>
                                Assassin
                            </TableHead>
                            <TableHead>
                                Bet Type
                            </TableHead>
                            <TableHead>
                                Price
                            </TableHead>
                            <TableHead>
                                Odds
                            </TableHead>
                            <TableHead className="w-[100px]">
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bets.map((bet) => (
                            <TableRow key={bet.betId}>
                                <TableCell className="font-medium">{bet.placedBy}</TableCell>
                                <TableCell>{bet.assassin}</TableCell>
                                <TableCell>{bet.betType}</TableCell>
                                <TableCell>{bet.price}</TableCell>
                                <TableCell>{bet.odds}</TableCell>
                                <TableCell className="text-right"><Button>Bet</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ResizablePanel>
            <ResizableHandle withHandle={true} />
            <ResizablePanel defaultSize={50}>
                B
            </ResizablePanel>
        </ResizablePanelGroup>
    </>

}