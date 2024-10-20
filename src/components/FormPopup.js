import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

export default function FormPopup() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // useEffect(() => {
    //     onOpen()
    // }, [])

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div>
                                    <div className="flex gap-4 mb-1">
                                        <p className='text-black text-xl text-center md:text-2xl font-semibold'>Your Free Journey Starts Here!</p>
                                        <img className='w-6 h-8' src="/images/logo-only.svg" alt="logo" />
                                    </div>
                                    <p className="text-gray text-[13px]">Enter these details to get started for free with Book MyDoc!</p>
                                    <form className="mt-2" action="">
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    className="hidden peer"
                                                    value="option1"
                                                />
                                                <div className="w-6 h-6 border-2 border-blue-500 rounded-full peer-checked:border-pink-500 flex justify-center items-center">
                                                    <div className="w-3 h-3 rounded-full bg-transparent peer-checked:bg-pink-500"></div>
                                                </div>
                                                <span className="ml-2">Option 1</span>
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    className="hidden peer"
                                                    value="option2"
                                                />
                                                <div className="w-6 h-6 border-2 border-blue-500 rounded-full peer-checked:border-pink-500 flex justify-center items-center">
                                                    <div className="w-3 h-3 rounded-full bg-transparent peer-checked:bg-pink-500"></div>
                                                </div>
                                                <span className="ml-2">Option 2</span>
                                            </label>
                                        </div>

                                    </form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}