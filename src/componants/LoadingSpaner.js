export default function LoadingSpaner() {
    return (
        <>
        <div className="row justify-content-center text-center  col-6 offset-3 align-items-center" style={{height:200}}>
        <div className="spinner-border text-success py-2 " role="status">
        </div>
        <div className="spinner-border text-success py-2 " role="status">
        </div>
        <div className="spinner-border text-success py-2 " role="status">
        </div>
        <div className="spinner-border text-success py-2 " role="status">
        </div>
      </div>
        </>
    );
}