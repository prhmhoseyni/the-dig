import Button from "@repo/ui/Button";

export default function ButtonPage() {
    return (
        <>

            <div className="flex items-center gap-4 p-4">
                <Button color="brand">Click Me</Button>
                <Button color="info">Click Me</Button>
                <Button color="success">Click Me</Button>
                <Button color="danger">Click Me</Button>
                <Button color="warning">Click Me</Button>
                <Button color="gray">Click Me</Button>
            </div>

            <div className="flex items-center gap-4 p-4">
                <Button color="brand" variant="tinted">
                    Click Me
                </Button>
                <Button color="info" variant="tinted">
                    Click Me
                </Button>
                <Button color="success" variant="tinted">
                    Click Me
                </Button>
                <Button color="danger" variant="tinted">
                    Click Me
                </Button>
                <Button color="warning" variant="tinted">
                    Click Me
                </Button>
                <Button color="gray" variant="tinted">
                    Click Me
                </Button>
            </div>

            <div className="flex items-center gap-4 p-4">
                <Button color="brand" variant="outlined">
                    Click Me
                </Button>
                <Button color="info" variant="outlined">
                    Click Me
                </Button>
                <Button color="success" variant="outlined">
                    Click Me
                </Button>
                <Button color="danger" variant="outlined">
                    Click Me
                </Button>
                <Button color="warning" variant="outlined">
                    Click Me
                </Button>
                <Button color="gray" variant="outlined">
                    Click Me
                </Button>
            </div>
        </>
    );
}
